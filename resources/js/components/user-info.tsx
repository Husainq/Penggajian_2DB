import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types/type';

export function UserInfo() {
    const { props } = usePage<PageProps>();
    const user = props.auth.user;

    return (
        <div className="flex items-center space-x-3 overflow-hidden">
            <div className="rounded-full bg-gray-300 h-8 w-8 flex items-center justify-center text-sm font-semibold">
                {user?.nama?.charAt(0)}
            </div>
            <div className="leading-tight truncate">
                <p className="text-sm font-medium truncate">{user?.nama ?? 'Guest'}</p>
                <p className="text-xs text-muted-foreground truncate">{user?.golongan} • {user?.divisi}</p>
            </div>
        </div>
    );
}
