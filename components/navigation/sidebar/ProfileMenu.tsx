import { IconUser, IconUserFilled } from "@tabler/icons-react";
import { cn } from "@/libs/tailwind";
import { PATHS } from "@/utils/paths";
import MenuItem from "./MenuItem";

interface ProfileMenuProps {
    isOpen: boolean;
}

const ProfileMenu = ({ isOpen }: ProfileMenuProps) => {
    const UserIcon = {
        onActive: IconUserFilled,
        onInactive: IconUser,
    }

    return (
        <div>
            <div className={cn(
                "hidden md:flex py-4"
            )}>
                <MenuItem name="Profile" icon={UserIcon} path={PATHS.APP.PROFILE} isOpen={isOpen} />
            </div>
        </div>
    )
}

export default ProfileMenu;