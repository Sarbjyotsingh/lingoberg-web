'use client';

import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';

import { cn } from '@/lib/utils';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

function Accordion({
  className,
  ...props
}: AccordionPrimitive.Root.Props & { collapsible?: boolean; type?: string }) {
  const rootProps = { ...props };
  delete rootProps.collapsible;
  delete (rootProps as { type?: string }).type;

  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn('flex w-full flex-col', className)}
      {...rootProps}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('not-last:border-b', className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group/accordion-trigger focus-visible:border-ring focus-visible:ring-ring/50 hover:text-primary relative flex flex-1 cursor-pointer items-start justify-between rounded-lg border border-transparent py-4 text-left text-base font-semibold transition-all outline-none focus-visible:ring-3',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="text-muted-foreground ml-4 size-5 shrink-0 transition-transform group-aria-expanded/accordion-trigger:hidden"
        />
        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          className="text-primary ml-4 hidden size-5 shrink-0 group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('text-muted-foreground pt-0 pb-5 text-[15px] leading-relaxed', className)}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
