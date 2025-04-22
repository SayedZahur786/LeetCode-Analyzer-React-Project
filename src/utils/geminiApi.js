// src/utils/geminiApi.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function generateInsights(userData, codingDuration) {
  try {
    const prompt = `
You are an expert competitive programming coach analyzing a student's LeetCode performance.

Here are the student's LeetCode statistics:
- Total Questions Solved: ${userData.totalSolved} out of ${userData.totalQuestions}
- Easy Problems Solved: ${userData.easySolved} out of ${userData.totalEasy}
- Medium Problems Solved: ${userData.mediumSolved} out of ${userData.totalMedium}
- Hard Problems Solved: ${userData.hardSolved} out of ${userData.totalHard}
- Acceptance Rate: ${userData.acceptanceRate}%
- Ranking: ${userData.ranking}
- Contribution Points: ${userData.contributionPoints}
- The student has been coding for ${codingDuration || 'an unknown amount of'} months.

Based on this data, please provide:

1. A brief performance assessment rating (0-10) taking in count the codingDuration and if a student is beginner and solving more than one problem a day on avearge with a mix of easy and medium and hard questions according to level give him good rating accordingly and also a category rating (beginner, intermediate, advanced, etc.)
2. 3-5 specific strengths based on their solving patterns
3. 3-5 areas for improvement with specific actionable advice
4. A recommended study plan with specific types of problems they should focus on next with a weekly and daily planner and a checklist for both week and day and give them tatgets to complete
5. Give them specific 3-4 LeetCode Pattern,Algorithm or Topics to solve in leetocde with an example question names
6. Advice for applying DSA knowledge in practical Implementation and telling them ways to improve, do things, join contests and things like that

Format your response with clear headings and bullet points for each section. Keep your response concise, specific, actionable, and encouraging.
    `;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }
    );

    const generatedText =
      response.data.candidates[0]?.content?.parts[0]?.text ||
      'Unable to generate insights at this time. Please try again later.';

    return generatedText;
  } catch (error) {
    console.error('Error generating insights:', error);
    return 'An error occurred while generating insights. Please check your API key and try again.';
  }
}
