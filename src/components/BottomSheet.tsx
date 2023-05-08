import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const BottomSheet = ({ isOpen, close, children }: any) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const handleBackdropClick = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      close()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
    return () => {
      document.body.style.overflow = 'visible'
    }
  })

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-full h-full  bg-transparent/50 z-50"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed bottom-0 left-0 z-[51] w-full max-h-70 p-6 bg-white overflow-y-auto rounded-t-lg"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={handleAnimationComplete}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BottomSheet
