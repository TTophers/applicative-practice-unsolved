/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const ast = data.asteroids;
  const yearCounts = {};
  for (const asteroids of ast) {
    const year = asteroids.discoveryYear;
    if (!yearCounts[year]) {
      yearCounts[year] = 1;
    } else {
      yearCounts[year]++;
    }
  }
  let maxYear = null;
  let maxCount = 0;


  for (const year in yearCounts) {
    if (yearCounts[year] > maxCount) {
      maxCount = yearCounts[year];
      maxYear = Number(year);
    }
  }

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
