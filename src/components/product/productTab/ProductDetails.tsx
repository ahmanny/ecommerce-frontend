import React from "react";
interface ProductDetailsProps {
  details: string;
  highlights: string[];
}

export default function ProductDetails({
  details,
  highlights,
}: ProductDetailsProps) {
  return (
    <div className="w-full ">
      <h1 className="heading-h5 text-foreground-f1 mb-4">Details</h1>
      <div className="flex flex-col gap-16">
        <p className="text-foreground-f5 text-base md:text-xl font-medium">
          {details}
        </p>
        <div className="text-foreground-f5 text-base md:text-xl font-semibold">
          <ul className=" list-disc pl-4">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
