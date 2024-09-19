import { filenames } from "./_filenames";
import { paths } from "./_paths";

const getOutput = () => ({
  filename: filenames.bundle,
  chunkFilename: filenames.chunk,
  path: paths.output,
  clean: true
})

export default getOutput;