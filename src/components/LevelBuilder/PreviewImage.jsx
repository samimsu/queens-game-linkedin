import React, { useEffect, useRef } from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useTranslation } from "react-i18next";

const PreviewImage = ({
  image,
  verticalLines,
  horizontalLines,
  showGridLines,
  setShowGridLines,
  tolerance,
  setTolerance,
  minLineHeight,
  setMinLineHeight,
  minLineWidth,
  setMinLineWidth,
  className = "",
}) => {
  const canvasRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (showGridLines && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = image;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        // ctx.drawImage(img, 0, 0);

        // Draw red lines for detected grid lines
        ctx.strokeStyle = "red";
        ctx.lineWidth = 10;

        // Draw vertical lines
        verticalLines.forEach((x) => {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, img.height);
          ctx.stroke();
        });

        // Draw horizontal lines
        horizontalLines.forEach((y) => {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(img.width, y);
          ctx.stroke();
        });
      };
    }
  }, [image, showGridLines, verticalLines, horizontalLines]);

  return (
    <div className={`flex space-x-4 ${className}`}>
      <div className="relative">
        <img
          src={image}
          alt="Level image"
          className="max-h-40 w-fit object-contain"
        />
        {showGridLines && (
          <canvas
            ref={canvasRef}
            className="max-h-40 w-fit object-contain absolute top-0 left-0"
          />
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col text-sm space-y-2 sm:w-52">
        <div className="flex items-center">
          <Switch
            checked={showGridLines}
            onCheckedChange={() => setShowGridLines((prev) => !prev)}
          />
          <label
            onClick={() => setShowGridLines((prev) => !prev)}
            className="pl-2 whitespace-nowrap"
          >
            {t("SHOW_GRID_LINES")}
          </label>
        </div>
        <label className="flex flex-col space-y-1">
          <span>{t("TOLERANCE")}</span>
          <Slider
            min={1}
            max={100}
            value={[tolerance]}
            onValueChange={(value) => setTolerance(value[0])}
          />
        </label>
        <label className="flex flex-col space-y-1">
          <span>{t("MINIMUM_LINE_HEIGHT")}</span>
          <Slider
            min={0}
            max={1}
            step={0.00625}
            value={[minLineHeight]}
            onValueChange={(value) => setMinLineHeight(value[0])}
          />
          {minLineHeight}
        </label>
        <label className="flex flex-col space-y-1">
          <span>{t("MINIMUM_LINE_WIDTH")}</span>
          <Slider
            min={0}
            max={1}
            step={0.00625}
            value={[minLineWidth]}
            onValueChange={(value) => setMinLineWidth(value[0])}
          />
          {minLineWidth}
        </label>
      </div>
    </div>
  );
};

export default PreviewImage;
