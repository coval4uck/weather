import { useMemo } from "react"
import { useDispatch } from "react-redux"


export const useCustomDispatch = (fn) => {
    const dispatch = useDispatch()
    useMemo(() => {
        dispatch(fn())
    },[dispatch])
}