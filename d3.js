import { line } from "d3-shape";
import { scaleTime, scaleLinear } from "d3-scale";
import { axisBottom, axisLeft } from 'd3-axis';
import { timeParse } from "d3-time-format";
import { select } from "d3-selection";
import { tsv} from "d3-request";
import { extent } from "d3-array";

export default {
  line: line,
  scaleTime: scaleTime,
  scaleLinear: scaleLinear,
  axisBottom: axisBottom,
  axisLeft: axisLeft,
  timeParse: timeParse,
  select: select,
  tsv: tsv,
  extent: extent
}
