export const messages = {
	user: {
		creation_success: "User Created Successfully",
		retrieval_success: "User retrieved successfully.",
		update: {
			update_success: "User details updates successfully.",
			deletion_success: "User deleted successfully.",
			recovery_success: "User recover successfully.",
			deactivation_success: "User deactivated successfully.",
			reactivation_success: "User reactivated successfully.",
		},
	},
	auth: {
		login_success: "LoggedIn Successfully.",
		invalid_account: "Invalid Password or Email.",
		token_expired: "The token has expired.",
		token_not_found: "Unauthorized user. Token not found. Please login."
	},
	token: {
		renew_success: "Access token renewed successfully.",
		invalid_token: "The token is invalid."
	},
	error: {
		internal_server_error: "Internal Server Error",
		404: "Resource not found"
	},
};
