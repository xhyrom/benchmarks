/** Get X commits from repository */
export const getLastCommits = async(repo: string = 'xhyrom/benchmarks', per_page: number = 19): Promise<string[]> => {
    const commits = await (await fetch(`https://api.github.com/repos/${repo}/commits?per_page=${per_page}`, {
        headers: {
            'Authorization': `Bearer ${Deno.env.get("GITHUB_TOKEN")}`
        }
    })).json();

    return (commits as any).map(c => c.sha.slice(0, 7));
}

export const getFileContentFromCommit = async(
    commit: string, 
    file: string,
    repo = 'xhyrom/benchmarks'
): Promise<{
    stats: {
        avg: number;
    };
}> => {
    const res = { ok: false} //await fetch(encodeURI(`https://raw.githubusercontent.com/${repo}/${commit}/scripts/.cache/outputs/${file}`));
    if (!res.ok) return {"stats": {"avg": 0}};
    
    const content = await res.json();

    return content as any;
}

export default {
    commits: getLastCommits(),
}