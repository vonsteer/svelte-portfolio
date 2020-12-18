  import fs from "fs";
  import path from "path";
  import grayMatter from "gray-matter";

  const getAllProjects = () =>
    fs.readdirSync("content/projects").map(fileName => {
      const project = fs.readFileSync(path.resolve("content/projects", fileName), "utf-8");
      return grayMatter(project).data;
    });

  export function get(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    const projects = getAllProjects();
    res.end(JSON.stringify(projects));
  }