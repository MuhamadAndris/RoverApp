import { type ReactNode } from "react";
import { createPortal } from "react-dom";
// import { ButtonIcon } from "./Button";
// import { X } from "lucide-react";

interface BaseModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export const BaseModal = ({
    isOpen,
    onClose,
    children
}:BaseModalProps) => {
    if (!isOpen) return null

    return createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
        }}>
            <div className="bg-white rounded-lg p-6 min-w-100 relative">
                {/* <ButtonIcon lucideIcon={X} className="absolute top-3 right-3" onClick={onClose} /> */}
                {children}
            </div>
        </div>,
        document.body
    )
}