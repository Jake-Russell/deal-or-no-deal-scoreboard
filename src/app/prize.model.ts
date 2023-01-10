import { PrizeType } from './prize-type.enum';

export interface Prize {
  name: String;
  prizeType: PrizeType;
  available: Boolean;
}
