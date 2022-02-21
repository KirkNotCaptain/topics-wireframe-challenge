import { NUMBER_OF_FONT_SIZES, BASE_FONT_SIZE } from './constants'

/**
 * Calculate the font color based on sentiment score
 * @param score - sentiment score of a given topicData
 * @returns
 */
export const calculateSentimentScoreColor = (score: number): string => {
  if (score > 60) {
    return "green";
  } else if (score < 40) {
    return "red";
  } else {
    return "grey";
  }
};

/**
 * Helper function to generate a volume range based on the min and max volume for api topics data
 * @param min - minimum volume recorded
 * @param max - maximum volume record
 * @returns range - list of volume ranges with incremental values within the max and min
 */
export const createVolumeRange = (min: number, max: number): number[] => {
  let range = [];
  const increment = Math.floor(max / NUMBER_OF_FONT_SIZES);

  if (max - min >= NUMBER_OF_FONT_SIZES) {
    for (let i = 0; i < NUMBER_OF_FONT_SIZES; i++) {
      range.push(min + i * increment);
    }
  }

  return range;
};

/**
 * Calculate font size for a selected word based on the the range of volumes for a given set of topics api data
 * @param volume - volume of selected word
 * @returns
 */
export const calculateFontsize = (
  volume: number,
  minVolume: number,
  maxVolume: number
): number => {
  let volumeRange = createVolumeRange(minVolume, maxVolume);

  if (volumeRange.length) {
    // The multipliers used to increase base size are arbitrary for styling purposes
    if (volume <= volumeRange[0]) {
      return BASE_FONT_SIZE;
    } else if (volume <= volumeRange[1]) {
      return BASE_FONT_SIZE * 2;
    } else if (volume <= volumeRange[2]) {
      return BASE_FONT_SIZE * 4;
    } else if (volume <= volumeRange[3]) {
      return BASE_FONT_SIZE * 6;
    } else if (volume <= volumeRange[4]) {
      return BASE_FONT_SIZE * 8;
    } else if (volume > volumeRange[5]) {
      return BASE_FONT_SIZE * 10;
    }
  }

  return volume;
};
