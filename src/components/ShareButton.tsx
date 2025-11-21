import { Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import formatDuration from "@/utils/formatDuration";

interface ShareButtonProps {
  levelType: "level" | "bonus" | "community";
  levelId: string;
  timer: number;
  levelName?: string;
}

const ShareButton = ({
  levelType,
  levelId,
  timer,
  levelName,
}: ShareButtonProps) => {
  const { t } = useTranslation();

  const handleShare = async () => {
    const formattedTime = formatDuration(timer);

    // Build the level URL
    const baseUrl = window.location.origin + import.meta.env.BASE_URL;
    let levelPath = "";
    let levelLabel = "";

    switch (levelType) {
      case "level":
        levelPath = `level/${levelId}`;
        levelLabel = `Level ${levelId}`;
        break;
      case "bonus":
        levelPath = `bonus/${levelId}`;
        levelLabel = levelName || `Bonus Level`;
        break;
      case "community":
        levelPath = `community/${levelId}`;
        levelLabel = levelName || `Community Level`;
        break;
    }

    const levelUrl = `${baseUrl}${levelPath}`;

    const shareTitle = t("SHARE_TITLE", { levelLabel });
    const shareText = t("SHARE_TEXT", {
      levelLabel,
      time: formattedTime,
    });

    const shareData = {
      title: shareTitle,
      text: shareText,
      url: levelUrl,
    };

    // Try Web Share API first (mobile native share)
    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed - fallback to clipboard
        if ((err as Error).name !== "AbortError") {
          fallbackCopyToClipboard(shareText, levelUrl);
        }
      }
    } else {
      // Fallback for browsers without Web Share API
      fallbackCopyToClipboard(shareText, levelUrl);
    }
  };

  const fallbackCopyToClipboard = (text: string, url: string) => {
    const fullText = `${text}\n${url}`;
    navigator.clipboard.writeText(fullText).then(() => {
      alert(t("SHARE_COPIED_TO_CLIPBOARD"));
    }).catch(() => {
      // Final fallback - show a prompt with the text
      prompt(t("SHARE_COPY_MANUALLY"), fullText);
    });
  };

  return (
    <button
      onClick={handleShare}
      className="text-lg min-w-36 rounded border px-3 py-1 w-full border-white flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
    >
      <Share2 size={18} />
      {t("SHARE")}
    </button>
  );
};

export default ShareButton;
