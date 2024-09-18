import React from "react";
import InviteFriend from "./InviteFriend";

export default function ReferralPage() {
    return (
        <div
            className=" rounded-t-[36px] pt-1 px-2 flex flex-col gap-4 min-h-screen">
            <div className="px-2 h-full">
                <InviteFriend />
            </div>
        </div >
    );
}
