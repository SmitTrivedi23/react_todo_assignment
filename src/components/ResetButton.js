import React from 'react';

function ResetButton({ resetTodos }) {
  return (
    <button onClick={resetTodos} className="reset-button">
      Reset
    </button>
  );
}

export default ResetButton;
