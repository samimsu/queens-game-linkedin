import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { createEmptyBoard } from "../../utils/board";
import { levels } from "../../utils/levels";
import Board from "./Board";
import WinningScreen from "./WinningScreen";
import Timer from "./Timer";
import HowToPlay from "./HowToPlay";
import SettingsDialog from "./SettingsDialog";
import getNavigationLevels from "@/utils/getNavigationLevels";
import useVisibility from "../../hooks/useVisibility";
import useGameLogic from "@/hooks/useGameLogic";

interface LevelProps {
  route: {
    params: {
      id: string;
      level: string;
    };
  };
}

const Level: React.FC<LevelProps> = ({ route }) => {
  const { id, level } = route.params;
  const navigation = useNavigation();
  
  const levelSize = levels[level].size;

  const { t } = useTranslation();
  const isVisible = useVisibility();

  const { previousLevel, nextLevel, previousDisabled, nextDisabled } =
    getNavigationLevels(id, level);

  const boardSize = levelSize;
  const colorRegions = levels[level].colorRegions;
  const regionColors = levels[level].regionColors;

  const {
    board,
    hasWon,
    timer,
    showWinningScreen,
    clashingQueens,
    showClashingQueens,
    showInstructions,
    showClock,
    autoPlaceXs,
    timerRunning,
    completed,
    history,
    setBoard,
    setHasWon,
    setShowWinningScreen,
    setTimerRunning,
    handleSquareClick,
    handleDrag,
    handleUndo,
    handleTimeUpdate,
    toggleClashingQueens,
    toggleShowInstructions,
    toggleShowClock,
    toggleAutoPlaceXs,
  } = useGameLogic({
    id,
    boardSize,
    colorRegions,
  });

  const navigateToPreviousLevel = () => {
    if (!previousDisabled) {
      navigation.navigate("Level", {
        id: previousLevel,
        level: `level${previousLevel}`,
      });
      setBoard(createEmptyBoard(levels[`level${previousLevel}`].size));
    }
  };

  const navigateToNextLevel = () => {
    if (!nextDisabled) {
      navigation.navigate("Level", {
        id: nextLevel,
        level: `level${nextLevel}`,
      });
      setBoard(createEmptyBoard(levels[`level${nextLevel}`].size));
    }
  };

  const resetLevel = () => {
    setBoard(createEmptyBoard(levelSize));
    setHasWon(false);
    setShowWinningScreen(false);
    history.current = [];
  };

  useEffect(() => {
    if (!isVisible || hasWon) {
      setTimerRunning(false);
    }
    if (isVisible && !hasWon) {
      setTimerRunning(true);
    }
  }, [isVisible, hasWon]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("LevelSelection")}
          >
            <Text style={styles.iconText}>←</Text>
          </TouchableOpacity>

          <View style={styles.navigationContainer}>
            <TouchableOpacity
              style={[styles.navButton, previousDisabled && styles.disabledButton]}
              onPress={navigateToPreviousLevel}
              disabled={previousDisabled}
            >
              <Text style={styles.navButtonText}>←</Text>
            </TouchableOpacity>

            <Text style={styles.levelTitle}>
              {t("LEVEL")} {id}
            </Text>

            <TouchableOpacity
              style={[styles.navButton, nextDisabled && styles.disabledButton]}
              onPress={navigateToNextLevel}
              disabled={nextDisabled}
            >
              <Text style={styles.navButtonText}>→</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rightControls}>
            {completed && (
              <View style={styles.crownIcon}>
                <Text style={styles.crownText}>👑</Text>
              </View>
            )}
            
            <TouchableOpacity style={styles.resetButton} onPress={resetLevel}>
              <Text style={styles.resetText}>↺</Text>
            </TouchableOpacity>
            
            <SettingsDialog
              showClashingQueens={showClashingQueens}
              toggleShowClashingQueens={toggleClashingQueens}
              showInstructions={showInstructions}
              toggleShowInstructions={toggleShowInstructions}
              showClock={showClock}
              toggleShowClock={toggleShowClock}
              autoPlaceXs={autoPlaceXs}
              toggleAutoPlaceXs={toggleAutoPlaceXs}
            />
          </View>
        </View>

        <View style={styles.timerContainer}>
          <Timer
            run={timerRunning}
            onTimeUpdate={handleTimeUpdate}
            showTimer={showClock}
          />
        </View>

        <View style={styles.gameContainer}>
          {showWinningScreen && (
            <WinningScreen
              timer={showClock && timer}
              previousLevel={previousLevel}
              nextLevel={nextLevel}
              level={id}
              close={() => setShowWinningScreen(false)}
            />
          )}
          
          <Board
            board={board}
            handleSquareClick={handleSquareClick}
            handleSquareDrag={handleDrag}
            level={level}
            boardSize={boardSize}
            colorRegions={colorRegions}
            regionColors={regionColors}
            showClashingQueens={showClashingQueens}
            clashingQueens={clashingQueens}
          />
        </View>
        
        <TouchableOpacity
          style={[styles.undoButton, (!history.current.length || hasWon) && styles.disabledButton]}
          onPress={handleUndo}
          disabled={!history.current.length || hasWon}
        >
          <Text style={styles.undoButtonText}>{t("UNDO")}</Text>
        </TouchableOpacity>

        {showInstructions && <HowToPlay />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },
  backButton: {
    borderWidth: 1,
    borderColor: "#6b7280",
    borderRadius: 20,
    padding: 8,
  },
  iconText: {
    fontSize: 18,
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navButton: {
    borderWidth: 1,
    borderColor: "#6b7280",
    borderRadius: 20,
    padding: 4,
    marginHorizontal: 8,
  },
  navButtonText: {
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  rightControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  crownIcon: {
    marginRight: 8,
  },
  crownText: {
    fontSize: 18,
    color: "#FFD700",
  },
  resetButton: {
    borderWidth: 1,
    borderColor: "#6b7280",
    borderRadius: 20,
    padding: 8,
    marginRight: 8,
  },
  resetText: {
    fontSize: 16,
  },
  timerContainer: {
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  gameContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  undoButton: {
    borderWidth: 1,
    borderColor: "#6b7280",
    borderRadius: 20,
    padding: 10,
    marginTop: 16,
    width: "100%",
    alignItems: "center",
  },
  undoButtonText: {
    fontSize: 16,
  },
});

export default Level;
