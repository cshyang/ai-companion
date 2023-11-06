import React from "react";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { ChatClient } from "./components/ChatClient";

interface ChatIdProps {
  params: {
    chatId: string;
  };
}

async function ChatIdPage({ params }: ChatIdProps) {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId, //select * all messages only with the login users
        },
      },
      _count: {
        // count messages from all users
        select: {
          messages: true,
        },
      },
    },
  });

  if (!companion) {
    return redirect("/");
  }

  return <ChatClient companion={companion} />;
}

export default ChatIdPage;
