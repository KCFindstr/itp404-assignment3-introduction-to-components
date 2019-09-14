export async function getRedditData(name) {
	let result = await fetch(`https://www.reddit.com/r/${name}.json`);
	let data = await result.json();
	return data.data.children;
}