enum TypesOfMedia {
  video = "video",
  audio = "audio",
}

enum FormatsOfMedia {
  mp4 = "mp4",
  mov = "mov",
  mkv = "mkv",
  flv = "flv",
  webM = "webM",
}

interface IPlayMedia {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown;
}

function playMedia(
  { name, type, format, subtitles, marks }: IPlayMedia = {
    name: "example",
    type: TypesOfMedia.video,
    format: FormatsOfMedia.flv,
  }
): string {
  let marksLog: string;

  if (Array.isArray(marks)) {
    marksLog = marks.join(", ");
  } else if (typeof marks === "string") {
    marksLog = marks;
  } else {
    marksLog = "Unsupported type of marks";
  }

  console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);

  return "Media started";
}

playMedia({
  name: "WoW",
  format: FormatsOfMedia.mp4,
  type: TypesOfMedia.audio,
  subtitles: "hmhmhm hmhmhm doh",
  marks: ["4:30", "5:40"],
});
