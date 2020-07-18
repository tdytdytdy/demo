import el from "element-ui/src/locale/lang/el";

export function formatnum(val) {
    if (!val) {
        return 0
    } else if (val < 1000) {
        return val
    } else if (val < 10000) {
        return (val / 1000).toFixed(1) + 'k'
    } else {
        return (val / 10000).toFixed(1) + 'w'
    }
}

export function formattime(val) {
    let time = Math.round(val)
    let min = Math.floor( time / 60)
    let sec = (time % 60).toString()
    return min + ':' + sec.padStart(2,'0')
}

export function date(url) {
    if (url) {
        return url.substring(0,10)
    }

}

export function sex(sex) {
    switch (sex) {
        case 0:
            return '未知';
            break;
        case 1:
            return '男';
            break;
        case 2:
            return '女';
            break;
    }

}