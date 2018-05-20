export default async ({ store, redirect, route }) => {
    if (store.state.user.logged) {
        return;
    }

    return redirect({
        path: '/'
    });
};