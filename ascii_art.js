import fs from "fs/promises";

// 读取 ASCII 艺术文件内容
async function readAsciiArt() {
  try {
    const data = await fs.readFile("ascii_art.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("读取文件错误：", err);
  }
}

readAsciiArt();
