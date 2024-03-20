// ConfirmationDialog.tsx
import React from "react";
import { ConfirmationDialogProps } from "../types";

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    message,
    onConfirm,
    onCancel,
}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ marginBottom: "1rem" }}>{message}</p>
            <button style={{ marginRight: "0.5rem" }} onClick={onConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default ConfirmationDialog;
