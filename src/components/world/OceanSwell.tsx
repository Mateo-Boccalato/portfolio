// Builds a seamlessly tiling wave: two identical periods side by side so a
// -50% translate loops without a visible seam.
function wavePath(width: number, period: number, amplitude: number, baseline: number, depth: number) {
  let d = `M0 ${baseline}`
  for (let x = 0; x < width * 2; x += period) {
    d += ` q ${period / 4} ${-amplitude} ${period / 2} 0 t ${period / 2} 0`
  }
  return `${d} V ${depth} H 0 Z`
}

const BACK_SWELL = wavePath(1440, 360, 28, 24, 48)
const FRONT_SWELL = wavePath(1440, 240, 18, 32, 48)

export function OceanSwell() {
  return (
    <div className="ocean-swell" aria-hidden="true">
      <svg className="ocean-swell__layer ocean-swell__layer--back" viewBox="0 0 2880 48">
        <path d={BACK_SWELL} />
      </svg>
      <svg className="ocean-swell__layer ocean-swell__layer--front" viewBox="0 0 2880 48">
        <path d={FRONT_SWELL} />
      </svg>
    </div>
  )
}
