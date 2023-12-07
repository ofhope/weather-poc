import { FunctionComponent, SVGProps } from "react";
import { WeatherIcon } from "../../domain/types";
import Cloudy from "./variant/cloudy.svg?react";
import Snow from "./variant/snow.svg?react";
import Rain from "./variant/rain.svg?react";
import Fog from "./variant/fog.svg?react";
import PartlyCloudyDay from "./variant/partly-cloudy-day.svg?react";
import PartlyCloudyNight from "./variant/partly-cloudy-night.svg?react";
import ClearDay from "./variant/clear-day.svg?react";
import ClearNight from "./variant/clear-night.svg?react";

type Size = "small" | "medium" | "large"

interface IconProps {
  variant: WeatherIcon;
  size?: Size
}

const VariantDictionary: Record<WeatherIcon, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  cloudy: Cloudy,
  snow: Snow,
  rain: Rain,
  fog: Fog,
  wind: Cloudy,
  "partly-cloudy-day": PartlyCloudyDay,
  "partly-cloudy-night": PartlyCloudyNight,
  "clear-day": ClearDay,
  "clear-night": ClearNight,
};

const SizeDictionary: Record<Size, number> = {
  small: 50,
  medium: 100,
  large: 300
}

export const Icon = ({ variant, size = "small" }: IconProps) => {
  const IconSvg = VariantDictionary[variant];
  const width = SizeDictionary[size]
  return (
    <IconSvg width={width} role="img" aria-label={variant} />
  );
};
