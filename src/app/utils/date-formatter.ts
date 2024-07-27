import { format } from "date-fns"
export default function DateFormatter (dateStr: string) { return format(new Date(dateStr), 'dd MMM yyyy')}