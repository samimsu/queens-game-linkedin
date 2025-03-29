import { Highlight, themes } from "prism-react-renderer";
import { useTheme } from "next-themes";

const styles = {
  line: {
    textAlign: "left",
    padding: "0.5em",
    lineHeight: "1.3",
    fontSize: "1rem",
    fontFamily: "'JetBrains Mono', monospace",
    overflowX: "auto",
  },
  lineNumber: {
    display: "inline-block",
    width: "2em",
    userSelect: "none",
    opacity: 0.3,
  },
};

const JSCode = ({ code = "" }: { code: string }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <div
      className="relative border rounded-lg overflow-hidden"
      style={{
        borderColor: isDarkTheme ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      }}
    >
      <div className="w-96 max-h-96 max-w-96 overflow-y-auto">
        <Highlight
          theme={isDarkTheme ? themes["oneDark"] : themes["oneLight"]}
          code={code}
          language="javascript"
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre style={{ ...style, ...(styles.line as React.CSSProperties) }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span style={styles.lineNumber as React.CSSProperties}>
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default JSCode;
