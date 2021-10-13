import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const modal = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "200px",
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
};

function Modal({ showModal, setShowModal }) {
	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div
					className="backdrop"
					variants={backdrop}
					animate="visible"
					initial="hidden"
					exit="hidden">
					<motion.div variants={modal} className="modal">
						<p>Want to make another pizza?</p>
						<Link to="/">
							<button>Start Again</button>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Modal;
