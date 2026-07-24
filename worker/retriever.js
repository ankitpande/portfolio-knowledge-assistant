export function retrieveRelevantDocs(question, knowledgeBase) {
    const keywords = question
        .toLowerCase()
        .split(/\W+/)
        .filter(word => word.length > 2);

    const scoredDocs = knowledgeBase.map(doc => {
        let score = 0;

        keywords.forEach(keyword => {
            if (doc.content.toLowerCase().includes(keyword)) {
                score++;
            }
        });

        return {
            ...doc,
            score
        };
    });

    return scoredDocs
        .filter(doc => doc.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}
