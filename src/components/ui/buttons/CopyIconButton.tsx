"use client";
import {
  Button,
  Clipboard,
  ClipboardCopyStatusDetails,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { RiFileCopy2Line } from "react-icons/ri";
interface CopyIconButtonProps {
  text: string;
}
export default function CopyIconButton({ text }: CopyIconButtonProps) {
  const [status, setStatus] = useState(false);
  return (
    <Clipboard.Root
      value={text}
      onStatusChange={(details: ClipboardCopyStatusDetails) => {
        setStatus(details.copied);
      }}
    >
      <Clipboard.Trigger asChild>
        <Button variant="surface" size="xl">
          {status ? (
            <MdCheck className="text-foreground-f5" />
          ) : (
            <RiFileCopy2Line className="text-foreground-f5" />
          )}
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
}
