'use client';

import { CheckIcon, ClipboardCopyIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('copy-button');

  const copy = () => {
    void navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
    });
    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <TooltipProvider>
      <Tooltip open={isOpen || isCopied} onOpenChange={setIsOpen}>
        <TooltipTrigger>
          <Button
            size="icon"
            variant="secondary"
            className="h-7 w-7 rounded-sm"
            disabled={isCopied}
            onClick={copy}
          >
            {isCopied ? <CheckIcon /> : <ClipboardCopyIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isCopied ? t('copied') : t('copy')}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
