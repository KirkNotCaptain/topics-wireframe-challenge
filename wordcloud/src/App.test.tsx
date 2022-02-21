import * as utils from './components/utils';
import { BASE_FONT_SIZE } from './components/constants';

/* UTIL UNIT TESTING */
test("calculate sentiment score returns correct font colors", () => {
	// A topic with a sentiment score > 60 should be displayed in green
	expect(utils.calculateSentimentScoreColor(100)).toBe('green');
	expect(utils.calculateSentimentScoreColor(61)).toBe('green');

	//A topic with a sentiment score < 40 should be displayed in red
	expect(utils.calculateSentimentScoreColor(60)).toBe('grey');
	expect(utils.calculateSentimentScoreColor(50)).toBe('grey');
	expect(utils.calculateSentimentScoreColor(40)).toBe('grey');
	
	//Other topics should be displayed in grey
	expect(utils.calculateSentimentScoreColor(39)).toBe('red');
	expect(utils.calculateSentimentScoreColor(0)).toBe('red');
});

test("calculate volume range", () => {
	// Return a range of volumes with a given max and min volume
	const testMin = 0;
	const testMax = 60;
	const expectedRange = [0, 10, 20, 30, 40, 50];
	expect(utils.createVolumeRange(testMin, testMax)).toStrictEqual(expectedRange);

	const testBadMin = 0;
	const testBadMax = 0;
	const expectedBadRange: any[] = [];
	expect(utils.createVolumeRange(testBadMin, testBadMax)).toStrictEqual(expectedBadRange);
})

test("calculate font size", () => {
	const testVolume = 55;
	const testVolumeMin = 0;
	const testVolumeMax = 60;
	const expectedFontSize = BASE_FONT_SIZE * 10;

	expect(utils.calculateFontsize(testVolume, testVolumeMin, testVolumeMax)).toBe(expectedFontSize);
})

