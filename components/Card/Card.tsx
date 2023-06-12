import React from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import { Text } from "../Text";
import { Heading } from "../Heading";

interface CardBorderProps {
  className?: string;
}

function CardBorder({ className }: CardBorderProps) {
  return (
    <div
      className={cx(
        "border-px absolute transition-all duration-200 group-hover:border group-hover:border-black",
        className
      )}
    />
  );
}

interface CardProps {
  heading: string;
  description: string;
  href: string;
}

function Card({ heading, description, href }: CardProps) {
  return (
    <Link
      href={href}
      className="group relative -mx-4 hover:bg-stone-300 md:mx-0 md:hover:bg-transparent"
    >
      <div className="z-10 flex h-52 w-full flex-col justify-between p-4 sm:h-48 md:px-0 lg:h-48 xl:h-52 2xl:h-48">
        <div className="flex flex-col gap-y-2 text-black">
          <Heading as="h3" variant="h3">
            {heading}
          </Heading>
          <Text variant="base">{description}</Text>
        </div>
        <Image
          src="/images/icons/arrow--right.svg"
          alt="Arrow Right"
          className="text-black"
          width={24}
          height={24}
        />
      </div>
      <div className="absolute inset-0 hidden h-full w-full md:block">
        <CardBorder className="-inset-[5%] h-[110%] w-[110%] group-hover:-inset-y-[10%] xl:group-hover:-inset-y-[8%] 2xl:group-hover:-inset-y-[10%]" />
        <CardBorder className="-inset-[5%] h-[110%] w-[110%]  group-hover:-inset-x-[7.5%]" />
      </div>
    </Link>
  );
}

export default Card;
