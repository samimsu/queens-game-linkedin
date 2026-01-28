import { useTranslation } from "react-i18next";
import { usePalette } from "@/context/PaletteContext";
import RootLayout from "@/layouts/RootLayout";
import { RotateCcw, Search } from "lucide-react";
import Button from "@/components/Button";
import { useMemo, useState } from "react";
import { colorNames } from "@/utils/colors";
import useLevelBuilderLogic from "@/hooks/useLevelBuilderLogic";

const PagePaletteSettings = () => {
  const { t } = useTranslation();
  const { globalPalette, updatePaletteColor, resetPalette, resetColor } =
    usePalette();
  const { state } = useLevelBuilderLogic();

  const [searchTerm, setSearchTerm] = useState("");

  const colorEntries = useMemo(() => {
    return state.colorOptions
      .map((option) => {
        // "option.value" is the Hex Code (e.g. #6C7A89)
        // We look up the internal key (e.g. "altoMain") using colorNames
        const internalKey =
          colorNames[option.value as keyof typeof colorNames] || option.value;

        return {
          hex: option.value, // Original Hex Reference
          name: internalKey, // Internal ID for saving (e.g. "altoMain")
          displayName: option.name, // Localized Name (e.g. "Alto")
        };
      })
      .sort((a, b) => a.displayName.localeCompare(b.displayName));
  }, [state.colorOptions]);

  const filteredColors = useMemo(() => {
    return colorEntries.filter((c) =>
      c.displayName.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [colorEntries, searchTerm]);

  return (
    <RootLayout>
      <div className="max-w-2xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{t("CUSTOM_PALETTE")}</h1>
          <Button
            onClick={resetPalette}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg"
          >
            <RotateCcw size={16} /> {t("RESET")}
          </Button>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t("PALETTE_DESCRIPTION")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          {Object.entries(globalPalette).map(([colorName, color]) => {
            // 🔍 LOOKUP: Find the entry that matches this internal ID (e.g. "altoMain")
            const match = colorEntries.find(
              (entry) => entry.name === colorName,
            );

            // If found, use the translated name ("Alto").
            // If not (fallback), just space out the internal name ("Alto Main").
            const displayName = match
              ? match.displayName
              : colorName.replace(/([A-Z])/g, " $1").trim();

            return (
              <div
                key={colorName}
                className="flex flex-col items-center p-4 border border-gray-400 dark:border-gray-400 rounded-xl shadow-sm"
              >
                <span className="text-lg font-bold mb-3">{displayName}</span>

                <div className="relative w-10 h-10 rounded-full overflow-hidden border cursor-pointer ring-offset-background transition-all hover:ring-2 hover:ring-ring">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) =>
                      updatePaletteColor(colorName, e.target.value)
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] p-0 m-0 cursor-pointer border-none bg-transparent"
                  />
                </div>
                <span className="mt-2 text-xs font-mono text-gray-600 dark:text-gray-400 uppercase">
                  {color}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex space-x-2 my-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              placeholder={t("SEARCH_COLORS") || "Search colors..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <button
            onClick={resetPalette}
            className="px-3 py-1 border border-destructive text-destructive rounded-md text-sm hover:bg-destructive/10"
            title={t("RESET_ALL_COLORS")}
          >
            {t("RESET_ALL") || "Reset All"}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredColors.map(({ hex, name, displayName }) => {
            const currentColor = globalPalette[name] || hex;
            const isCustomized = !!globalPalette[name];
            return (
              <div
                key={hex}
                className="flex items-center justify-between space-x-1 p-3 border border-gray-400 dark:border-gray-400 rounded-lg transition-colors"
              >
                {/* LEFT SIDE: Text Labels */}
                <div className="flex flex-col">
                  <span className="font-medium capitalize">{displayName}</span>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    {/* Show the Original Hex code */}
                    <span>Def: {hex}</span>

                    {/* VISUAL ANCHOR: Show a tiny dot of the ORIGINAL color */}
                    <span
                      className="w-3 h-3 rounded-full border border-slate-300 inline-block"
                      style={{ backgroundColor: hex }}
                      title="Original Color"
                    />
                  </div>
                </div>

                {/* RIGHT SIDE: The Interactive "Paint Tube" */}
                <div className="flex items-center space-x-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border cursor-pointer hover:ring-2 hover:ring-ring">
                    {/* This input controls the OVERRIDE */}
                    <input
                      type="color"
                      value={currentColor}
                      onChange={(e) => updatePaletteColor(name, e.target.value)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] p-0 m-0 cursor-pointer border-none bg-transparent"
                    />
                  </div>

                  {/* Reset Button (remains the same) */}
                  <button
                    onClick={() => resetColor(name)}
                    disabled={!isCustomized}
                    className={`p-2 rounded-full transition-all ${
                      isCustomized
                        ? "text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                        : "text-gray-300 cursor-not-allowed"
                    }`}
                    title={t("RESET_COLOR")}
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </RootLayout>
  );
};

export default PagePaletteSettings;
