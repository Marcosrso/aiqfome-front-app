import styles from './skeleton.module.css'

interface SkeletonProps {
  width?: string
  height?: string
  borderRadius?: string
}

export default function Skeleton({
  width = '100%',
  height = '1rem',
  borderRadius = '8px',
}: SkeletonProps) {
  return (
    <div
      className={styles.skeleton}
      style={{ width, height, borderRadius }}
    />
  )
}