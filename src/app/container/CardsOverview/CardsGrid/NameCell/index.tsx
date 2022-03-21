import { Popper, Skeleton } from "@mui/material"
import { useState, MouseEvent } from "react"
import { CardEntity } from "types"

type Props = {
  value: CardEntity["name"]
  row: CardEntity
}

export default function NameCell(props: Props) {
  const [isLoading, setLoading] = useState(true)
  const value = props.value
  const imageSrc = props.row.imageSrc
  const isFlipped = ["Investigator", "Act", "Agenda"].includes(
    props.row.typeName
  )
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const onMouseOver = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const onMouseOut = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(false)
  }

  return (
    <>
      <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        {value}
      </div>
      <Popper open={open} anchorEl={anchorEl} placement={"right-start"}>
        {isLoading && (
          <Skeleton
            variant="rectangular"
            width={isFlipped ? 419 : 300}
            height={isFlipped ? 300 : 419}
          />
        )}
        <img
          hidden={isLoading}
          width={isFlipped ? 419 : 300}
          height={isFlipped ? 300 : 419}
          src={`https://arkham-collection.herokuapp.com${imageSrc}`}
          onLoadCapture={() => setLoading(false)}
          alt={value}
        />
      </Popper>
    </>
  )
}
