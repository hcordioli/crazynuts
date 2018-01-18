import { UrlMatcher, UrlSegment } from '@angular/router';

export function OptionalRoute(path: string): UrlMatcher {
    let parts = path.split('/');

    return (urlSegments: UrlSegment[]) => {
        let posParams: {
            [name: string]: UrlSegment;
        } = {};
        for (let i = 0; i < parts.length; i++) {
            if (parts[i].substr(0, 1) == ':' && parts[i].substr(-1, 1) == '?') {
                if (urlSegments[i]) {
                    posParams[parts[i].substr(1, parts[i].length - 2)] = urlSegments[i];
                }
            } else if (parts[i].substr(0, 1) == ':') {
                if (!urlSegments[i]) {
                    return null;
                }
                posParams[parts[i].substr(1, parts[i].length - 1)] = urlSegments[i];
            } else {
                if (!urlSegments[i] || urlSegments[i].path != parts[i]) {
                    return null;
                }
            }
        }
        return {
            consumed: urlSegments,
            posParams: posParams
        };
    };
}