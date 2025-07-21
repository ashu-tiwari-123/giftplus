import React from "react";

const BouncyGiftLoader = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.wrapper}>
        <div style={styles.boxWrapper}>
          <div style={styles.box}></div>
          <div style={styles.shadow}></div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shadowScale {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(0.6);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)", // Almost white
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxWrapper: {
    position: "relative",
  },
  box: {
    width: "60px",
    height: "60px",
    backgroundColor: "#1F2937", // Charcoal fill
    border: "4px solid #C09F63", // Gold stroke
    borderRadius: "8px",
    animation: "bounce 1s ease-in-out infinite",
  },
  shadow: {
    position: "absolute",
    top: "70px",
    left: "0",
    right: "0",
    margin: "auto",
    width: "60px",
    height: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "50%",
    animation: "shadowScale 1s ease-in-out infinite",
  },
};

export default BouncyGiftLoader;
