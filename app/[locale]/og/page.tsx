'use client';

import { motion } from 'framer-motion';
import { Typography } from '@/components/typography';
import { Noise } from '@/components/ui/images';
import { cn } from '@/lib/utils';

function Og() {
  return (
    <div className="h-[90vh] overflow-hidden">
      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-12 overflow-hidden text-center">
        <div className="overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-[10] min-h-[40vh] animate-cardlight rounded-b-full bg-gradient-to-b from-rose-500 to-red-100 opacity-80 blur-3xl dark:from-rose-900 md:min-h-[60vh]" />
          <div
            className="top-18 absolute inset-0 -z-[1] mix-blend-overlay"
            style={{
              backgroundRepeat: 'repeat',
              backgroundImage: `url('${Noise.src}')`,
              opacity: 0.1,
            }}
          />
        </div>

        <motion.div
          animate={{ opacity: 1 }}
          className="container flex flex-col items-center gap-12"
          initial={{ opacity: 0.5 }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="space-y-8">
            <Typography
              className={cn(
                'container text-balance text-center text-[10rem] font-semibold leading-tight',
              )}
              element="h1"
            >
              <span className="bg-gradient-to-tr from-primary to-[#db2777] bg-clip-text text-transparent">
                Ahmed
              </span>{' '}
              Mohamed
            </Typography>

            <Typography
              as="h2"
              className="text-[4rem] text-muted-foreground"
              element="h4"
            >
              Fullstack web engineer | UI/UX Designer
            </Typography>
          </div>

          <Typography
            as="mutedText"
            className="place-self-end"
            element="span"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default Og;
