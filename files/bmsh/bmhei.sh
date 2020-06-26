#!/data/data/com.termux/files/usr/bin/bash

function bmsay() {
	if test "$2"; then
		code=$2
		bmsh="BMSH: "
	else
		code=37m
		bmsh=""
	fi
	if test "$3" = "0"; then
		bmsh=""
	fi
	printf "\033[""$code""$bmsh""$1""\033[0m\n"
	if test "$4"; then
		sleep $4
	fi
}

function pause() {
	bmsay "按回车继续..." 34m 0
	read -s -n 1 press
}

function get_file_size() {
#获取文件大小
	if test "$1"; then
		if test -f "$1"; then
			printf $(ls -l "$1" | awk '{print $5}')
			return 0
		fi
	fi
	printf "0"
	return 1
}

function init(){
	#检测存储权限，没有则申请
	ls /sdcard >/dev/null 2>&1
	if test "$?" -ne "0"; then
		termux-setup-storage
		bmsay "小黑需要你的“授权”..." 33m 0

		pause
		ls /sdcard >/dev/null 2>&1
		if test "$?" -ne "0"; then
			bmsay "小黑无权处理文件。" 31m 0
			pause
			exit
		fi
	fi

	which lua wget 7z apksigner >/dev/null 2>&1
	if test "$?" -ne "0"; then
		for tbz in $(find "/sdcard/" -name "bmbak.tbz"); do
			bmtbz="$tbz"
			size=$(get_file_size "$bmtbz")
			if test "$size" -eq "30324736"; then
				cd /data/data/com.termux/files
				cp ./usr/bin/busybox ./tar
				rm -rf home usr
				unset LD_PRELOAD
				./tar -jxvf "$bmtbz" usr home
				return 0
			fi
		done
	fi
}




if test ! -f "~/.bmhei.lua" ; then
		wget -O "~/.bmhei.lua" "https://cnzixn.github.io/files/bmsh/bmhei.lua"
		if test "$?" -ne "0"; then
			printf "获取文件失败." 31m
			exit
		fi
fi

alias hei="lua ~/.bmhei.lua"
			hei