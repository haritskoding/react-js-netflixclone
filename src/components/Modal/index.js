import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import "./index.css";
import { motion, AnimatePresence } from "framer-motion"
import { TrailerYoutebe } from '..';

const Modal = forwardRef((props, ref) => {
    console.log('prerer', props)
    const [open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
            close: () => setOpen(false)
        }
    },
        [],
    )
    return (
        <AnimatePresence>
            {open && (
                <>

                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.5
                            }
                        }}
                        className="modal-backdrop"
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        onClick={() => setOpen(false)}
                    >

                        <motion.div
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1,
                                transition: {
                                    duration: 0.6
                                }
                            }}
                            className="modal-content-wrapper"
                            exit={{
                                x: 100,
                                opacity: 0,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                        >
                            <motion.div className="modal-content">
                                <button className="close" onClick={() => setOpen(false)}>
                                    <i className="fa fa-times"></i>
                                </button>
                                <TrailerYoutebe trailerUrl={props.trailerUrl} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>

    )
}

);

export default Modal
