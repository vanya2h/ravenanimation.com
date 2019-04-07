try {
	require("dotenv").config();
	require("colors");
	require("@babel/register");
	require("./server").default(__dirname);
} catch (error) {
	throw new Error(error);
}
