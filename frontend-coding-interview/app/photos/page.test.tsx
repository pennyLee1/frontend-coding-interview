import { render, screen } from "@testing-library/react";
import Photos from "./page";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe("Photos Page", () => {
    const queryClient = new QueryClient();
    const mockPush = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue(Array.from({ length: 10 }, (_, i) => ({
                id: i + 1,
                title: `Photo ${i + 1}`,
                url: `https://example.com/photo${i + 1}.jpg`,
            }))),
        } as any);
    });

    it("redirects to login if not authenticated", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Photos />
            </QueryClientProvider>
        );

        expect(mockPush).toHaveBeenCalledWith("/");
    });

    it("renders photos when authenticated", () => {
        localStorage.setItem("isAuthenticated", "true");

        render(
            <QueryClientProvider client={queryClient}>
                <Photos />
            </QueryClientProvider>
        );

        expect(screen.getByText("All Photos")).toBeInTheDocument();
        expect(screen.getAllByRole("img").length).toEqual(10);
    });
});