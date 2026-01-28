import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const STORAGE_KEY = "queens_custom_palette";

// 1. Start with an empty object.
// We don't map A, B, C here anymore. We only store CHANGES.
const defaultOverrides: Record<string, string> = {};

interface PaletteContextType {
  globalPalette: Record<string, string>;
  updatePaletteColor: (colorName: string, newHex: string) => void;
  resetPalette: () => void;
  resetColor: (colorName: string) => void;
}

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

export const PaletteProvider = ({ children }: { children: ReactNode }) => {
  const [globalPalette, setGlobalPalette] = useState<Record<string, string>>(
    () => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(STORAGE_KEY);
        // If saved data has "A", "B" keys (from old version), ignore it and start fresh
        // or just accept that the user might need to hit "Reset" once.
        return saved ? JSON.parse(saved) : defaultOverrides;
      }
      return defaultOverrides;
    },
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(globalPalette));
  }, [globalPalette]);

  const updatePaletteColor = (colorName: string, newHex: string) => {
    setGlobalPalette((prev) => ({ ...prev, [colorName]: newHex }));
  };

  const resetColor = (colorName: string) => {
    // 2. To reset, we simply DELETE the key from our overrides.
    // This forces the app to fall back to the hardcoded default.
    setGlobalPalette((prev) => {
      const next = { ...prev };
      delete next[colorName];
      return next;
    });
  };

  const resetPalette = () => {
    setGlobalPalette(defaultOverrides);
  };

  return (
    <PaletteContext.Provider
      value={{ globalPalette, updatePaletteColor, resetPalette, resetColor }}
    >
      {children}
    </PaletteContext.Provider>
  );
};

export const usePalette = () => {
  const context = useContext(PaletteContext);
  if (!context)
    throw new Error("usePalette must be used within a PaletteProvider");
  return context;
};
