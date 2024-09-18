import React from "react";
import { Sheet } from "react-modal-sheet";

interface modal {
    isOpen: boolean;
    setOpen: Function;
    children: React.ReactNode;
    headerShown?: boolean;
}

const BottomModal = ({ isOpen, setOpen, children, headerShown }: modal) => {
    return (
        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container className="bottom-modal !rounded-t-[36px] !h-fit">
                {headerShown && <Sheet.Header className="mt-[-35px]" />}
                <Sheet.Content>{children}</Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    );
};

export default BottomModal;
