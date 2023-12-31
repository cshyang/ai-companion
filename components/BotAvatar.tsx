import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BotAvatarProps {
  src: string;
}

function BotAvatar({ src }: BotAvatarProps) {
  return (
    <div>
      <Avatar className="h-12 w-12">
        <AvatarImage src={src} />
      </Avatar>
    </div>
  );
}

export default BotAvatar;
