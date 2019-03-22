const size = {
	xs: `576px`,
	sm: `768px`,
	md: `992px`,
	lg: `1200px`,
	xl: `1440px`
};

export const device = {
	xs: `(min-width: ${size.xs})`,
	sm: `(min-width: ${size.sm})`,
	md: `(min-width: ${size.md})`,
	lg: `(min-width: ${size.lg})`,
	xl: `(min-width: ${size.xl})`,
	MXxs: `(max-width: ${size.xs})`,
	MXsm: `(max-width: ${size.sm})`,
	MXmd: `(max-width: ${size.md})`,
	MXlg: `(max-width: ${size.lg})`,
	MXxl: `(max-width: ${size.xl})`
};
