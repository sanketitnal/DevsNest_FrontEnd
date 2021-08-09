const getTheme = (date, sunrise, sunset, currentTime) => {
	//sunrise, sunset in "HH:MM AM" format
	const convertToTime = (nonStdFormat) => {
		let [hour, minuteAmpm] = nonStdFormat.split(":");
		let [minute, ampm] = minuteAmpm.split(" ");

		hour = Number(hour);
		minute = Number(minute);

		if (ampm === "PM") {
			hour += 12;
		} else if (ampm === "AM" && hour === 12) {
			hour = 0;
		}
		return hour + ":" + minute;
	};

	let sunriseTime = new Date(date + " " + convertToTime(sunrise));
	let sunsetTime = new Date(date + " " + convertToTime(sunset));

	if (currentTime >= sunriseTime && currentTime <= sunsetTime) {
		return "light";
	} else {
		return "dark";
	}
};

const prettyDate = (date) => {
	const currentDate = new Date(date);
	const day = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	let hours = currentDate.getHours(),
		minutes = currentDate.getMinutes(),
		ampm = "AM";

	if (hours === 0) {
		hours = 12;
	} else if (hours > 12) {
		hours -= 12;
		ampm = "PM";
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	return day[currentDate.getDay()] + ", " + hours + ":" + minutes + " " + ampm;
};

export { getTheme, prettyDate };
