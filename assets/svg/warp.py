import numpy as np


def calculate_H(im1_pts, im2_pts): 

	A = []
	b = []
	for pi, pi_o in zip(im1_pts, im2_pts): 
		x, y = pi
		p_vec = [x, y]

		Ai = []
		Ai.append([p_vec + [1] + [0] * 5])
		Ai.append([[0] * 3 + p_vec + [1] + [0] * 2])
		Ai.append([[0] * 6 + p_vec])
		A += (Ai)

		x_o, y_o = pi_o
		w = x_o / x
		b += [x_o, y_o, w]

	h = np.linalg.lstsq(A, b)
	h.append(1)

	H = np.reshape(h, (3, 3))

	return H



